// generate 5 numbers using for loop
// for(i=0; i<5; i++){
//     console.log(i)
// }

// prime numbers

num=125
fc=0
for(i=2; i<num; i++){
    if (i%num==0){
        fc+=1
    }
}if (fc==0){
    console.log('prime')
}else{
    console.log('not a prime')
}


//palindrome
 var num=121
 var rev=0
 var temp=num
while (num>0){
    rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)

}if (temp==rev){
    console.log('p')
}else{
    console.log('np')
}

