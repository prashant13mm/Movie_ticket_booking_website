import React from 'react'

const Blurr = ({top="auto",left='auto',right='auto',bottom='auto'}) => {
  return (
    <div className='absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl ' 
    style={{top:top,left:left,right:right,bottom:bottom}}>
        {/* upar wale stylee mai value put ki jaygi fir woh waha se padding aur sab kuch krke positon set krege */}
      
    </div>
  )
}

export default Blurr
//yeh sab isliye krr rhe hai taaki ek blurred circle aa ske web page pr