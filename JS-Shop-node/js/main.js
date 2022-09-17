const app = new Vue({
	el: '#app',
	data: {
		userSearch: '',
		showCart: false,
		cartItems: [],
		filtered: [],
		products: [],
		
	},
	computed: {
		cartCount() {
			return this.cartItems.reduce((count, {amount}) => count + amount, 0);
		},
		cartTotal() {
			return this.cartItems.reduce((count, {amount, price}) => count + amount * price, 0);
		}
	},
	methods: {
		addProduct(item){
			let find = this.cartItems.find(el => el.id === item.id);


			if (find) {
				find.amount++;
			}
			else {
				const prod = Object.assign({amount: 1}, item);//создание нового объекта на основе двух, указанных в параметрах
				this.cartItems.push(prod)
			}
		},
		decProduct(item){
			let find = this.cartItems.find(el => el.id === item.id);


			if (!find) {
				return;
			}

			find.amount--;

			if (find.amount < 1) {
				this.cartItems.splice(this.cartItems.indexOf(item), 1);
			}

			if (!this.cartItems.length) {
				this.$data.showCart = false;
			}
		},
		removeProduct(item){
			this.cartItems.splice(this.cartItems.indexOf(item), 1);

			if (!this.cartItems.length) {
				this.$data.showCart = false;
			}
		},
		filter(){
			let regexp = new RegExp(this.userSearch, 'i');

			this.filtered = this.products.filter(el => regexp.test(el.title));
		}
	},
	mounted(){
		apiGetData('getProducts').then(data => data.forEach(item => {
			this.$data.products.push(item);
			this.$data.filtered.push(item);
		}));
	}

});

console.log('hello');