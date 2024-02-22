function MakeDiv()
{   //const array=[];
    //let temp; 
    for(let i=0;i<10;i++)
    {
        let div=document.createElement("div");
        div.className="blocks";
        //console.log("hello");
        //console.log(Math.floor(Math.random()*58));
        div.style.transform="translateX("+i+1+"vw)";
        //temp=;
        div.innerHTML=Math.floor((Math.random()*50)+5);
        //array.push(Number(temp));
        div.style.height=((Number(div.innerHTML)/100)*150)+"vh";
        document.getElementById("Array").appendChild(div);
    }
    return document.querySelectorAll(".blocks");

}
function swap(block1,max,block2,i,pos){
    return new Promise(function(resolve)
    {
        //let parent=document.getElementById("Array");
        let blocks=document.querySelectorAll(".blocks");
        //console.log("tempStyleafter init",tempStyle);




        //const temp=blocks[pos];

        console.log("inside swap")
        //console.log("max.innerhtml",max)
        //console.log("bloc2 before swap",block2.innerHTML)
        //console.log("bloc1 before swap",block1.innerHTML)
        //console.log("tempstyle before",tempStyle);

        //block1.innerHTML=block2.innerHTML;
        //////////block1.style.transform=tempStyle;
        /////////block1.style.transform=block2.style.transform;
        //console.log("maxhtml after block1and 2 swap",max)
        //block2.innerHTML=Number(max);
        ////////////block2.style.transform=tempStyle;
        //console.log("parent",parent);
        //blocks[pos] = blocks.splice(blocks[i], 1, blocks[pos])[0];
        //parent.replaceChild(blocks[i],blocks[pos]);
        //parent.insertBefore(blocks[i],blocks[pos]);
        //parent.replaceChild(temp,blocks[i]);

        //console.log("bloc[pos] before swap",blocks[pos])
        window.requestAnimationFrame(function(){
            setTimeout(()=>{
                const tempStyle=blocks[pos].style.transform;

                console.log("tempStyle",tempStyle)

                console.log("blocks[pos].transform before",blocks[pos].style.transform)
                blocks[pos].style.transform=blocks[i].style.transform;
                console.log("blocks[pos].transform after",blocks[pos].style.transform)
                console.log("blocks[i].transform before",blocks[i].style.transform)
                console.log("tempStyle",tempStyle)
                blocks[i].style.transform=tempStyle;
                console.log("blocks[i].transform after",blocks[i].style.transform)

            },250);
        })

        let parentA = blocks[pos].parentNode;
        let siblingA = blocks[pos].nextSibling === blocks[i] ? blocks[pos] : blocks[pos].nextSibling;
    
        // Move `nodeA` to before the `nodeB`
        blocks[pos].parentNode.insertBefore(blocks[pos], blocks[i]);
    
        // Move `nodeB` to before the sibling of `nodeA`
        parentA.insertBefore(blocks[i], siblingA);
        

       // blocks=document.querySelectorAll(".blocks");

        blocks=document.querySelectorAll(".blocks");

        //console.log("bloc[pso] after swap",blocks[pos])
        blocks[pos].style.backgroundColor="sandybrown";
        blocks[i].style.backgroundColor="lightblue";
        setTimeout(function(){
            resolve("ok");
        },1000);
    })
}

async function SelectionSort(array){
    let max,pos,temparray=[],passarray=[];
    array.forEach(element => {
        temparray.push(element.innerHTML);
        
    });
    console.log("temparray",temparray);

    for(let i=array.length-1;i>=0;i--)
    {
        //console.log("i",i);
        //console.log("inside 1st loop");
        //let maxSearchBlockStyle=window.getComputedStyle ? window.getComputedStyle(array[i], null).getPropertyValue("background-color") : array[i].style.backgroundColor;
// ------------------------------------------------------------
        array[i].style.backgroundColor="green";
// ------------------------------------------------------------
        max=array[i].innerHTML;
        pos=i;
        //array[i].style.backgroundColor="green";
        //console.log("minVBlock",maxBlock)
        for(let j=0;j<i;j++)
        {
          //  console.log("inside 2st loop");
            
            //let temp=window.getComputedStyle ? window.getComputedStyle(array[j], null).getPropertyValue("background-color") : array[j].style.backgroundColor;
            // --------------------------------------------------
            array[j].style.backgroundColor="red"
            
            let val2=Number(array[j].innerHTML);
            //console.log("tempCOlor",temp)
            await new Promise(function(resolve){
                setTimeout(()=>{
                resolve("ok");
            },1000)});
            if(max<val2)
            {
                //await ChangeStyleCompare(array[j],maxSearchBlockStyle,maxBlock);
                //await ChangeStyleCompare(j,i,maxSearchBlockStyle);

                //array[i].style.backgroundColor=maxSearchBlockStyle;
                //array[i].style.backgroundColor=maxBlock.style.backgroundColor;
                // ------------------------------------------------------------
                array[pos].style.backgroundColor="sandybrown";
                max=array[j].innerHTML;
                pos=j;
                // --------------------------------
                array[pos].style.backgroundColor="green";
                //array[j].style.backgroundColor="green";
                //maxBlock.style.backgroundColor="green";
            }
            else
            {
                    //console.log("array[j],bakcolor",window.getComputedStyle(array[j], null).getPropertyValue("background-color"))
                    //console.log("tempcolor",temp);
                    array[j].style.backgroundColor="sandybrown";
                    //console.log("array[j]after",array[j].style.backgroundColor);

            }
    console.log("i,j",i,j);
            
        }
        //console.log("maxfinal.innerhtml",maxBlock.innerHTML);
        await swap(array[pos],max,array[i],i,pos);
        array=document.querySelectorAll(".blocks");
        //console.log("pass",array);
        array.forEach(element => {
            passarray.push(element.innerHTML);
            
        });
        console.log("passarray",passarray);

    }
    console.log(array);
}

function main(){
   let array=MakeDiv();
   SelectionSort(array);

}
main();