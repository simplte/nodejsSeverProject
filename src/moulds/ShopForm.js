const Yup = require('yup');

exports.createShopFormSchema = ()=> {
    return Yup.object({
        name: Yup.string()
        .required('店铺名不能为空')
        .min(2, '店铺名至少三个字符')
        .max(20, '店铺名不可超过20个字符')
    })
}

