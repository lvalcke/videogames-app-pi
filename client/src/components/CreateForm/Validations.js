
const validations = (gameData) => {

    let errors = {}

    if(!gameData.name.length){
        errors.name =`This field can't be empty`
    }
    if(!gameData.name.length && gameData.name.length > 30){
        errors.name =`Name is too long`
    }
    if(!gameData.description.length){
        errors.description =`This field can't be empty`
    }
    // if(/^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[\w#!:.?+=&%@!\-\/]*)?$/.test(gameData.background_image)){
    //     errors.background_image =`This field must be a URL`
    // }
    if(!gameData.released.length){
        errors.release =`This field can't be empty`
    }
    if(!gameData.rating.length){
        errors.rating =`This field can't be empty`
    }
    if(isNaN(parseInt(gameData.rating))){
        errors.rating =`Must to be a number`
    }
    if(gameData.rating > 5){
        errors.rating =`Must to be a number between 0 and 5`
    }
    if(!gameData.platforms.length){
        errors.platforms =`This field can't be empty`
    }
    if(!gameData.genres.length){
        errors.genres =`You must choose at least one genre`
    }
    
    return errors
}

export default validations