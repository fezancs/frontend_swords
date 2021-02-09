export interface Product {
    sku:string;        
    _store	: string;
    _attribute_set	:string;
    _type :string;
    _product_websites : "swordskingdom";
    country_of_manufacture	:string; 
    creareseo_discontinued	:"defaultvalue";
    creareseo_discontinued_product	:"defaultvalue";
    created_at	: Date ;
    custom_block :string;	
    custom_block_2 :string; 
    description :string; 
    featured :string,
    gift_message_available :string;	
    has_options :string;
    meta_description :string; 
    meta_keyword :string; 
    meta_title :string; 
    name :string; 
    news_from_date :Date, 
    news_to_date :Date,	
    options_container : "defaultvalue";
    price : number; 
    product_page_type:string; 
    required_options :"defaultvalue";	
    short_description : string; 
    special_from_date :Date, 
    special_price:number,  
    special_to_date :Date, 
    status :string, 
    tax_class_id :string, 
    thumbnail : string,
    thumbnail_label	:string,
    updated_at :string,	
    url_key	:string,
    url_path :string,
    visibility :string, 
    weight :string, 
    is_in_stock :boolean,
    _group_price_website :string, 
    _group_price_customer_group :string, 
    _group_price_price :string, 
}
