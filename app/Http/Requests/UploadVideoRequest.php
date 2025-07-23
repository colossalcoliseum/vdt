<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadVideoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:255|string|min:3',
            'description' => 'required|max:255|string|min:3',
            'visibility' => 'required',
            'thumbnail' => 'file|mimetypes:image/jpeg,image/png|max:10240',
            'video' => 'file|mimetypes:video/mp4,video/x-matroska|size:20000000'
        ];
    }
}
