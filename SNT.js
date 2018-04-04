function kiem_tra_snt(n)
{
    var flag = true;
     if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
     if (flag == true){
        console.log(n + " là số nguyên tố ");
    }
    else{
        console.log(n + " không phải là số nguyên tố ");
    }
}

kiem_tra_snt(7);