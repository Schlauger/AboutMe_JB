
let tabTitle =document.title;
let lastMin=-1
let symb =["⚗", "🔬", "📡", "🔧", "💼", "📝", "📜", "🎥", "🎬",
           "📷", "📹", "📟", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖",
           "🌗", "🌘", "⏱", "⌚", "😎"]
window.addEventListener("blur", () => {
    // document.title = "🔧⚒⏱⏲⏰";
    const date = new Date();
    // const hour = date.getHours();
    const min = date.getMinutes();
    document.title = symb[min%symb.length];
    if(min != lastMin){
        console.log(min);
        lastMin = min;
        document.title = symb[min%symb.length];
    }
})
window.addEventListener("focus", () => {
    document.title =  tabTitle;
})

function minimizeTggl(img){
    if (img.style.width === "10%"){
        img.style.width = "80%";
        img.style.height = "80%";
        img.style.margin="0 auto";
        //  img.style.transition = "width 2s, height 2s";
        
    } else {
        img.style.width = "10%";
        img.style.height = "10%";
        img.style.margin="0 auto";
        // img.style.transition = "width 2s, height 2s";
    }
    var ctx1 = document.getElementsByClassName("txt_ctx");
    sizeTggl(ctx1,"0%","100%");
    ctx1.style.transition="all 3s ease-in-out";
    ctx1.style.display="block";
    

}

function sizeTggl(tag,min,max){
    if (tag.style.width === min){
        tag.style.width = max;
        tag.style.height = max;
        // tag.style.margin="0 auto";
        //  img.style.transition = "width 2s, height 2s";
        
    } else {
        tag.style.width = min;
        tag.style.height = min;
        // tag.style.margin="0 auto";
        // img.style.transition = "width 2s, height 2s";
    }    
}