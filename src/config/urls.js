export const urls = {
   user: {path: '/user'},
   signIn: {path: '/user/sign-in', name: 'Авторизация'},
   signUp: {path: '/user/sign-up', name: 'Регистрация'},
   home: {path: '/', name: 'Главная'},
   products: {path: '/products', name: 'Товары'},
   companyProducts: {path: '/company-products/:id', name: 'Товары компании'},
   companyUpdateName: {path: '/company-products/:id/update-company', name: 'Редактирование компании'},
   companyUpdateCategory: {path: '/company-products/:id/update-category', name: 'Редактирование категориев'},
   companyUpdateProducts: {path: '/company-products/:id/update-products', name: 'Редактирование продуктов'},
   categoryDetail: {path: '/company-products/:id/category/:categoryId', name: 'Категория'},
   productDetail: {path: '/company-products/:id/category/:categoryId/product/:productId', name: 'Продукт'},
   personal: {path: '/personal', name: 'Личный кабинет'},
   profile: {path: '/personal/profile', name: 'Аккаунт'},
   orders: {path: '/personal/orders', name: 'История заказов'},
   cart: {path: '/personal/cart', name: 'История заказов'},
   wishes: {path: '/personal/wishes', name: 'Список желаний'},
   companyCreating: {path: '/personal/company-creating', name: 'Создание компании'},
   companyList: {path: '/personal/company-list', name: 'Мои компании'},
};