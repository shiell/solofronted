//* la propieda object-cover es para que la imagen se acomode segun al tamaño

function images(){
    return(
        <div className="mx-[32px]">
            <div className="grid grid-cols-3 gap-8">
                <img src="https://cdn.pixabay.com/photo/2023/10/02/13/27/woman-8289221_1280.jpg" className="w-full h-96 object-cover"/>
                <img src="https://cdn.pixabay.com/photo/2023/10/02/13/27/woman-8289221_1280.jpg" className="w-full h-96 object-cover"/>
                <img src="https://cdn.pixabay.com/photo/2023/10/02/13/27/woman-8289221_1280.jpg" className="w-full h-96 object-cover"/> 
            </div>
        </div>
    )
}

export default images