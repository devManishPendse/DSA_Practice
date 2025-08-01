function fun(num) {
    if (num < 1) return;
    console.log(num)
    fun(num - 1)
}

fun(5);
