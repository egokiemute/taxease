import axios from "axios"

export const UploadMedia = async (formData: FormData): Promise<{ url: string }> => {
  const file = formData.get("file") as File

  if (!file) {
    throw new Error("No file provided")
  }

  // add preset
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string)

  const fileType = file.type.split("/")[0]

  let cloudinaryUploadUrl = ""
  if (fileType === "image") {
    cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`
  } else if (fileType === "video") {
    cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`
  } else {
    throw new Error("Unsupported file type")
  }

  try {
    const response = await axios.post(cloudinaryUploadUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })

    return { url: response.data.secure_url }
  } catch (error) {
    console.error("Error uploading to Cloudinary", error)
    throw error
  }
}
