console.log(Power(4, 44));

function Power(num, pow) {
  if (pow > 0) {
    let z = pow / 2;
    if (pow % 2 == 0)
      return Power(num, z) * Power(num, z);
    else
      return num * Power(num, Math.floor(z)) * Power(num, Math.floor(z));
  } else
    return 1;


}