export async function uploadImage(file: File, bucket: string = 'listings'): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('bucket', bucket);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  const { url } = await response.json();
  return url;
}

export async function deleteImage(path: string, bucket: string = 'listings'): Promise<void> {
  const response = await fetch('/api/upload', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path, bucket }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete image');
  }
}
