const dataContainer = document.getElementById("data-container")
const titleDataContainer = document.getElementById("title-data-container")
const redingNum = document.getElementById("read-num")


const loadAllApi = async()=>{
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts"
    const res = await fetch(url)
    const data = await res.json()
    const categorys = data.posts
    displayAllApi(categorys)
}
const displayAllApi = (categorys)=>{
    categorys.forEach(category => {
        let activeColor = "bg-green-600"
        if(category.isActive){
            activeColor
        }else{
            activeColor = "bg-red-600"
        }
        // console.log(category)
        const categoryDiv = document.createElement("div")
        categoryDiv.innerHTML=`
        <div class="flex p-6 bg-[#F1F2FF] rounded-xl border-[#DEDFFE]">
                        <div id="" class="rounded-xl w-14 relative" >
                            <img src="${category.image}" class="w-14 h-14 rounded-xl" alt="">
                            <div class="absolute h-3 w-3 rounded-full ${activeColor} -top-1 right-0">

                            </div>
                         </div>
                         <div id="">
                            <div id="category-container" class="flex gap-7 text-sm font-semibold">
                                <p>#${category.category}</p>
                                <p>Author : ${category.author.name}</p>
                            </div>
                            <div class="mb-2 border-b-2 border-dashed border-gray-200">
                                <h3 class="text-xl font-bold mt-2">${category.title}</h3>
                                <p class="text-sm text-gray-400 my-5">${category.description}</p>
                            </div>
                            <div id="icon-container" class="flex justify-between mt-3">
                                <div class="flex gap-4">
                                    <div class="text-gray-600"><i class="fa-regular fa-message"></i> ${category.comment_count}</div>
                                    <div class="text-gray-600"><i class="fa-regular fa-eye"></i> ${category.view_count}</div>
                                    <div class="text-gray-600"><i class="fa-regular fa-clock"></i> 5 min</div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="w-7 h-7 rounded-full bg-[#10B981] flex justify-center items-center">
                                    <i onclick="printSubtitle('${category.id}')" class="fa-solid fa-envelope-open text-white "></i>
                                </div>
                            </div>

                         </div>
                     </div>
        `
        dataContainer.appendChild(categoryDiv)
    });
}
let countNum = 0;
const printSubtitle = async(categoryId)=>{
    
    // const url = `https://openapi.programming-hero.com/api/retro-forum/posts`
    // const res = await fetch(url)
    // const data = await res.json()
    // const categorys = data.find(categoryId)
   
    // console.log(categorys)
    
    countNum++;
    redingNum.innerText=countNum
    const subtitleDiv = document.createElement("div")
    subtitleDiv.className =`flex mb-3 items-center justify-center bg-white p-2 rounded-lg shadow-xl`
    subtitleDiv.innerHTML=`
    <h3 class="text-sm font-bold mt-2">10 Kids Unaware of <br> Their Halloween Costume</h3>
    <div class="text-gray-600"><i class="fa-regular fa-message"></i> 500</div>
    `
    titleDataContainer.appendChild(subtitleDiv)
}










loadAllApi()