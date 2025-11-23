import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Paper from "@mui/material/Paper";
import FormatBoldSharpIcon from '@mui/icons-material/FormatBoldSharp';
import FormatStrikethroughSharpIcon from '@mui/icons-material/FormatStrikethroughSharp';
import FormatAlignRightSharpIcon from '@mui/icons-material/FormatAlignRightSharp';
import FormatAlignLeftSharpIcon from '@mui/icons-material/FormatAlignLeftSharp';
import FormatAlignCenterSharpIcon from '@mui/icons-material/FormatAlignCenterSharp';
import Document from '@tiptap/extension-document'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import {Dropcursor} from '@tiptap/extensions'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
const MenuBar = ({editor, imageEditor}) => {
    if (!editor) {
        return null
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
                <Sheet
                    variant="soft" color="primary"
                    sx={{borderRadius: 'md', display: 'inline-flex', gap: 1, p: 1.5}}
                >
                    <Button onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}>H1</Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}>H2</Button>
                    <Button onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}>H3</Button>
                     <Button onClick={() => editor.chain().focus().toggleBold().run()}>
                        <FormatBoldSharpIcon fontSize="small"/>
                    </Button>
                    <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <FormatItalicIcon fontSize="small"/>
                    </Button>
                    <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
                        <FormatStrikethroughSharpIcon fontSize="small"/>
                    </Button>
                    <Button onClick={imageEditor}>
                        <AddAPhotoIcon fontSize="small"/>
                    </Button>


                    <Button onClick={() => editor.chain().focus().toggleHighlight().run()}>
                        Highlight
                    </Button>

                    <Button onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                        <FormatAlignLeftSharpIcon fontSize="small"/>
                    </Button>
                    <Button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                        <FormatAlignCenterSharpIcon fontSize="small"/>
                    </Button>
                    <Button onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                        <FormatAlignRightSharpIcon fontSize="small"/>
                    </Button>
                    <Button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>≡</Button>

                </Sheet>


        </Box>
    );
}

export default () => {

    const addImage = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({src: url}).run()
        }
    }
    const editor = useEditor({
        extensions: [
            StarterKit, Document, Paragraph, Text, Image, Dropcursor,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,
        ],
        content: `
      <p>This is a basic example of implementing images. Drag to re-order.</p>

    `,
    })

    return (
        <>
            <MenuBar editor={editor} imageEditor={addImage}/>
            <Paper sx={{
                maxWidth: '85rem',
                minWidth: '60rem',
                mt:2,
                '& .ProseMirror': {
                    minHeight: '8rem',
                    outline: 'none',

                    '& p.is-editor-empty:first-of-type::before': {
                        content: 'attr(data-placeholder)',
                        float: 'left',
                        color: 'text.disabled',
                        pointerEvents: 'none',
                        height: 0,
                    },
                }
            }}><EditorContent editor={editor}/></Paper>
        </>
    )
}
