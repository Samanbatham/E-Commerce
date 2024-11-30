import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name :"djkpajxrn",
    api_key:"543862984447258",
    api_secret:"3H0u8_aTNce-ulfBGtrI-_FtqJ8"
})

const storage = new multer.memoryStorage();

async function imageUploadUtils(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type:"auto"
    })
    return result;
}

const upload = multer({storage});

export {upload , imageUploadUtils};