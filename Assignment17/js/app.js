function ProductList(){
    this.pname = ko.observable("");
    this.pprice = ko.observable("");
    this.products = ko.observableArray([
        {name:'Pepsi', price:30.00},
        {name:'Coke', price:35.00},
        {name:'Dew', price:25.00},
    ]) 
    this.addProduct = function(){
        if(this.pname()!=""&& this.pprice()!=""){
            this.products.push({
                name:this.pname(),
                price:this.pprice()
            })
            this.pname("");
            this.pprice("");
        }
    }

}

const productList = new ProductList();
ko.applyBindings(productList)