import React,{useReducer} from 'react'

const ImageGallery = () => {

    const initialState={


        currentImageIndex:0
    }

    const Reducer=(state,action)=>{
        switch(action.type){
            case "PREV-IMAGE":
                return{
                    currentImageIndex:state.currentImageIndex-1
                }

                case "NEXT-IMAGE":
                    return{
                        currentImageIndex:state.currentImageIndex+1
                    }

                default:
                    return state
        }

    }

    const [ImgState, dispatch] = useReducer(Reducer,initialState);

    const Images=[
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",

        "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",

        "https://img.freepik.com/premium-photo/chameleon-with-red-spot-its-head_924629-217761.jpg",

        "https://img.freepik.com/premium-photo/detailed-photo-chameleons-eyes_129172-1202.jpg",

        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",

        "https://funkylife.in/wp-content/uploads/2024/02/good-night-image-467.jpg"
    ]

    const CurrentImage= Images[ImgState.currentImageIndex];


  return (
        <>
            <img className="m-1 h-[500px]
            w-full" src={CurrentImage}></img>
            <div className="flex gap-3 mt-5 ml-3">
            <button className="p-2 bg-teal-700 rounded-xl"
             onClick={()=>{dispatch({type:"PREV-IMAGE"})}}>Previous</button>
            <button className="p-2 bg-teal-700 rounded-xl"  onClick={()=>{dispatch({type:"NEXT-IMAGE"})}}>Next</button>
            </div>
        </>
   
  )
}


export default ImageGallery