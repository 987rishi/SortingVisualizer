function input_list()
{
    let button1=document.getElementById('button_select_list_yes');
    if(button1.checked)
    {
        document.getElementById('hidden_input').style.display='block';
        document.getElementById('hidden_submit').style.display='block';
        document.getElementById('alert_to_usr_about_choosing_random_list').style.display="none";
        usr_list();
    }
    else
    {
        document.getElementById('hidden_input').style.display='none';
        document.getElementById('hidden_submit').style.display='none'
    }  
}
function message_to_user()
{
    if(document.getElementById('button_select_list_no').checked){
        document.getElementById('hidden_input').style.display='none';
        document.getElementById('hidden_submit').style.display='none';
        document.getElementById('alert_to_usr_about_choosing_random_list').style.display="block";

        document.getElementById('alert_to_usr_about_choosing_random_list').innerHTML="Sorting will be done on a random list";
        //if(document.getElementById('button_select_list_no').checked)
                random_array=[];
                for(let i=0;i<10;i++)
                    random_array.push(Math.floor(Math.random()*100));
                console.log("random array",random_array)

                make_div(random_array);
                bubble_sort();
       
    }
}
function usr_list(){
    // let button1=document.getElementById('button_select_list_yes');
    // if(button1.checked)
    // {
        let form=document.getElementById('usr_input');
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let inp_str=document.getElementById("hidden_input").value;
                                                
            make_div(inp_str.split(',').join(''));/*removing ,from string and passing into make_div*/
            num_arr=inp_str.split(',');
            document.getElementById('hidden_input').style.display='none';
            document.getElementById('hidden_submit').style.display='none';
            bubble_sort() ;
            });
    // }
    // else
    // {
    //    
    // }
}
function swap(pos_1,pos_2){
    return new Promise(function(resolve){
        let temp;
        console.log("inside swap");
    let divs=document.querySelectorAll(".block");
    let container=document.getElementById("cells");
    console.log("divs[pos1]-initial_positiion",divs[pos_1])
    container.insertBefore(divs[pos_2],divs[pos_1]);
    console.log("divs[pos1]-final_positiion",divs[pos_1])
    console.log("block array--------------",divs);
    console.log("block array--------------",divs);
    setTimeout(function(){resolve("ok");},1000);
    
});
}
async function bubble_sort()
{
    let str=document.querySelectorAll(".block");
    if(str.length==1)
        return 1;
    let temp=0;
    for(var i=0;i<str.length-1;i++)
    {
        for (var  j= 0; j <str.length-i-1; j++) 
        {
            let val1=str[j].innerHTML;
            let val2=str[j+1].innerHTML;
            await set_upper_div(j,j+1);
            if(val1>val2)
            {
            await swap(j,j+1);
            str=document.querySelectorAll(".block");
            }
        }
        str[j].style.backgroundColor="green";
        VerticalLine(j);
    }
}
function make_div(str){
    // alert(str_len);
    for(let i=0;i<str.length;i++){
    let div=document.createElement('div');
    div.className="block";
    div.innerHTML=str[i];
    div.style.fontSize="2vw";
    document.getElementById('cells').appendChild(div);
}
}
function set_upper_div(left,right){
    return new Promise(function(resolve){
    let l_div=document.getElementById('comparison_left');
    let r_div=document.getElementById('comparison_right');
    let block=document.querySelectorAll(".block");
    l_div.innerHTML=block[left].innerHTML;
    r_div.innerHTML=block[right].innerHTML;
    l_div.style="font-size:2vw;display:flex;align-items:center;justify-content:center;";
    r_div.style="font-size:2vw;display:flex;align-items:center;justify-content:center;"
    let comp_set=document.querySelectorAll(".comparison_set");
    comp_set.forEach(box=>{
        //box.style.transition="opacity 500ms"
        box.style.opacity="1";
    });
    move_arrow_and_upper_div(left);
    setTimeout(function(){resolve("ok")},1000);
})     
}
function move_arrow_and_upper_div(j){
    let block=document.querySelectorAll(".block");  
    let viewportWidth=document.documentElement.clientWidth;
    let viewportHeight=document.documentElement.clientHeight;
    let arrow=document.getElementById('arrow');
    let UpDivs=document.getElementsByClassName("comparison_set");
    let com_left_pos_left=block[j].offsetLeft;
    let com_left_pos_top=block[j].offsetTop;
    let com_right_pos_left=block[j+1].offsetLeft;
    let com_right_pos_top=block[j+1].offsetTop;

        UpDivs[0].style.left=com_left_pos_left+'px';
        UpDivs[0].style.top=com_left_pos_top-block[j].clientHeight+'px';

        UpDivs[1].style.top=(com_left_pos_top-block[j].clientHeight)+"px";
        UpDivs[1].style.left=(com_left_pos_left+com_right_pos_left)/2+'px';

        UpDivs[2].style.left=com_right_pos_left+'px';
        UpDivs[2].style.top=com_right_pos_top-block[j+1].clientHeight+'px';
    arrow.style.left=(com_left_pos_left)+"px";
    arrow.style.top=com_left_pos_top+block[j].clientHeight+'px';
}
function VerticalLine(pos)
{
    let VL=document.getElementById("VerticalLine");
    let block=document.querySelectorAll(".block");
    VL.style.display="block";
    VL.style.left=(block[pos].offsetLeft+block[pos-1].offsetLeft)/2+"px";
    VL.style.top=block[pos].offsetTop+"px";
}
// function main(){
    
//     usr_list();
// }
// main();