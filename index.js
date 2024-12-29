var input = document.getElementsByTagName("input")[0];
var meaege = document.getElementById("rander");
var random = [
    { mesges: "Hy, khaana kha liya? 😊" },
{ mesges: "Miss kar rahi hoon tumhe! ❤️" },
{ mesges: "Tum itne cute kyun ho? 😍" },
{ mesges: "Guess karo, abhi kis ka khayal aaya? 😊" },
{ mesges: "Kal milne ka plan banate hain? 🥰" },
{ mesges: "Good morning, sunshine! ☀️" },
{ mesges: "Tum bina zindagi kitni boring hoti. ❤️" },
{ mesges: "Main tumhari baaton ko roz yaad karti hoon. 🥰" },
{ mesges: "Tum itne smart kyun lagte ho? 😘" },
{ mesges: "Ek hug chahiye, abhi ke abhi! 🤗" },
{ mesges: "Tum meri duniya ho. ❤️" },
{ mesges: "Chalo kahin ghoomne chalte hain! 🚗" },
{ mesges: "Mujhe tumse kuch baat karni hai. 😊" },
{ mesges: "Tumhara smile mera din banata hai! 😘" },
{ mesges: "Aj tumhara favourite khana banaungi! 🍲" },
{ mesges: "Kabhi kabhi lagta hai tum dream ho. 🥺" },
{ mesges: "Tumhari baatein mujhe bohot khush karti hain. ❤️" },
{ mesges: "Zyada kaam mat karo, aram bhi karo! 😊" },
{ mesges: "Tumhara pyar duniya ka best feeling hai. 🥰" },
{ mesges: "Mujhe tum par har din aur pyaar aata hai. ❤️" },
{ mesges: "Tumhari yaadon mein kho gayi hoon. ❤️" },
{ mesges: "Aaj mausam itna acha lag raha hai, tum yaad aa gaye. 😊" },
{ mesges: "Tumse baat karke din ban jata hai mera. ❤️" },
{ mesges: "Main tumhe itni importance kyun deti hoon? Kyunki tum meri duniya ho! 😊" },
{ mesges: "Tumhari baatein mujhe roz inspire karti hain. ❤️" },
{ mesges: "Kya kar rahe ho abhi? Mujhe yaad kar rahe ho? 😘" },
{ mesges: "Mujhe tumhare bina kuch adhoora lagta hai. ❤️" },
{ mesges: "Kya tum jaante ho, tum mere hero ho? 😍" },
{ mesges: "Tumhara pyar mujhe har mushkil se nikal deta hai. ❤️" },
{ mesges: "Aaj kuch acha karna hai, sirf tumhare saath! 🥰" },
{ mesges: "Tum meri life ka best decision ho. ❤️" },
{ mesges: "Mujhe tumhare saath old age tak rehna hai. ❤️" },
{ mesges: "Aaj kal tum pehle se zyada handsome lag rahe ho. 😊" },
{ mesges: "Tumhari ek smile se mera mood theek ho jata hai. ❤️" },
{ mesges: "Tumhare bina main adhuri hoon. ❤️" },
{ mesges: "Tum meri jaan ho, tumhare bina sab boring lagta hai. 🥺" },
{ mesges: "Aj ka din tumhare liye special hai. ❤️" },
{ mesges: "Tumhare bina duniya bilkul pheeki lagti hai. 😊" },
{ mesges: "Mujhe tumhari baaton se kabhi bore nahi hota. ❤️" },
{ mesges: "Tumhare bina main kuch nahi. ❤️" },
{ mesges: "Tum mere sabse bade support ho. 😊" },
{ mesges: "Mujhe tumhara pyar her cheez se zyada pyara lagta hai. ❤️" },
{ mesges: "Tumhare bina subha ka din adhoora lagta hai. ❤️" },
{ mesges: "Tumhara pyar mujhe duniya ki sabse lucky ladki banata hai. 😊" },
{ mesges: "Tumhara saath mere har din ko perfect banata hai. 🥰" },
{ mesges: "Tumhara confidence mujhe hamesha inspire karta hai. ❤️" },
{ mesges: "Tum mere khwab ho jo sach ho gaye. ❤️" },
{ mesges: "Mujhe tumse roz nayi cheez seekhne milti hai. ❤️" },
{ mesges: "Tum mere best friend ho, aur mera sab kuch bhi. 😊" },
{ mesges: "Tum mujhe hamesha special feel karwate ho. ❤️" },
{ mesges: "Tumhare bina mere chehre par smile nahi aati. 😊" },
{ mesges: "Mujhe tumhari honesty aur loyalty pasand hai. ❤️" },
{ mesges: "Tum meri strength ho. ❤️" },
{ mesges: "Tumhari baatein mujhe har waqt yaad rehti hain. 😊" },
{ mesges: "Tumhari awaaz mujhe bohot sukoon deti hai. ❤️" },
{ mesges: "Tum mere dil ki dhadkan ho. ❤️" },
{ mesges: "Tumhare saath zindagi ka har lamha special hai. 🥰" },
{ mesges: "Mujhe tumhare saath har pal jeena hai. ❤️" },
{ mesges: "Tum meri duaon ka jawab ho. ❤️" },
{ mesges: "Tum mere liye duniya ke sabse zaruri insaan ho. 😊" },
{ mesges: "Tumhari smile mujhe har din fresh feel karwati hai. ❤️" },
{ mesges: "Tum mere favorite insaan ho. ❤️" },
{ mesges: "Tumhara saath mujhe complete feel karwata hai. ❤️" },
{ mesges: "Tum mere hero ho, aur hamesha rahoge. 😊" },

];

function mesges() {
    meaege.innerHTML += `<ul class="right">${input.value}</ul> `;
    input.value = "";

    // Wait for 1 second and then display a random message
    setTimeout(auto, 1500);
}

function auto() {
    var out = Math.floor(Math.random() * random.length);
    meaege.innerHTML += `<ul>${random[out].mesges}</ul> `;
}

// Example usage
// mesges();
