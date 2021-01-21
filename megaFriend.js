function megaFriend("Munna","Zafree","Elon Musks","Masrukul")
{
var friendsName = ["Munna","Zafree","Elon Musks","Masrukul"];

var highest = friendsName[0];
for(var i = 0; i< friendsName.length;i++)
{
    
    if (friendsName[i].length> highest.length)

    {
        highest = friendsName[i];
    }  
} 
 return highest;
}