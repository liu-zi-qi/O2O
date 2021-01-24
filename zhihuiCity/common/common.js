export function toast(title){
	uni.showToast({
		icon:'none',
		title:title
	})
}
/**
 * 手机验证
 */
export function checkPhone(value){
	//let reg =/^1\d{10}$/
	if(value!=0){
		return true;
	}
	toast('账号格式错误');
	return false
}
/**
 * 密码验证
 */
export function checkPwd(value){
	if(value.length>=6){
		return true;
	}
	toast('密码必须大于6位');
	return false
}

export function tan(value){
	if(value==0){
		return true;
	}
	toast('账号密码错误');
	return false
}
