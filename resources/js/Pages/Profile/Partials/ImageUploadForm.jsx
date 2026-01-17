import { useState, useRef } from 'react';
import { usePage, useForm, router } from '@inertiajs/react';
import Cropper from 'react-easy-crop';
import { Button, Box, Container, Alert } from '@mui/material';

function AvatarUpload() {

    const props = usePage().props;
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const { data, setData, processing, errors } = useForm({
        avatar: '',
    });

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        setError('');

        if (file) {
            const maxSize = 500000 * 1024 * 1024;
            if (file.size > maxSize) {
                setError('File size too big');
                return;
            }

            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    const getCroppedImage = async () => {
        const img = new Image();
        img.src = image;

        return new Promise((resolve) => {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = croppedArea.width;
                canvas.height = croppedArea.height;

                ctx.drawImage(
                    img,
                    croppedArea.x,
                    croppedArea.y,
                    croppedArea.width,
                    croppedArea.height,
                    0,
                    0,
                    croppedArea.width,
                    croppedArea.height
                );

                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg', 0.95);
            };
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
             const croppedBlob = await getCroppedImage();

             const formData = new FormData();
            formData.append('avatar', croppedBlob, 'avatar.jpg');
            formData.append('_method', 'put');
            formData.append('_token', props.csrf_token);

             router.post(route('profile.avatar.update'), {
                _method: 'put',
                _token: props.csrf_token,
                avatar: croppedBlob,
            });

             setImage(null);
            setCrop({ x: 0, y: 0 });
            setZoom(1);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (err) {
            setError(err.message || 'Error while uploading');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, mb: 4 }}>
                <h2>Качване на Аватар</h2>

                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                {errors.avatar && <Alert severity="error" sx={{ mb: 2 }}>{errors.avatar}</Alert>}

                <form onSubmit={submit}>
                    {!image ? (
                        <Box sx={{ mb: 2 }}>
                            <input
                                ref={fileInputRef}
                                id="avatar"
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                required
                                style={{ display: 'block', marginBottom: '16px' }}
                            />

                        </Box>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 400,
                                    mb: 2,
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Cropper
                                    image={image}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>
                                    Zoom: {zoom.toFixed(2)}x
                                </label>
                                <input
                                    type="range"
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    value={zoom}
                                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                                    style={{ width: '100%' }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => {
                                        setImage(null);
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = '';
                                        }
                                    }}
                                    fullWidth
                                >
                                    Отказ
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={loading || processing}
                                >
                                    {loading || processing ? 'Uploading' : 'Upload avatar'}
                                </Button>
                            </Box>
                        </>
                    )}
                </form>
            </Box>
        </Container>
    );
}

export default AvatarUpload;
