<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadPostRequest extends FormRequest
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
             'is_published' => 'required',
            'category_id' => 'required',
            'status_id' => 'required',
            'visibility_id' => 'required',
            'creator_id' => 'required',
            'thumbnail' => 'file|mimes:jpeg,image,png,jpg,webp|max:5120',
            'main_image' => 'file|mimes:jpeg,image,png,jpg,webp|max:5120'
        ];
    }
}
