/*---item data---*/
const items={
    "black-smartphone":{name:"Black Smartphone",category:"Electronics",location:"Main Campus",date:"6 September 2026",description:"Black smartphone with a transparent protective case.",icon:"fa-mobile-screen-button",image:"images/smartphone.jpg",reportedBy:"John Doe",email:"johndoe@gmail.com",phone:"+91 98765 43210",type:"lost"},
    "car-keys":{name:"Set of Car Keys",category:"Keys",location:"Parking Area",date:"4 September 2026",description:"Two keys attached to a small black keychain.",icon:"fa-key",image:"images/car-keys.jpg",reportedBy:"Rahul Shah",email:"rahul@example.com",phone:"+91 98765 12345",type:"lost"},
    "college-backpack":{name:"Black College Backpack",category:"Bags",location:"Library",date:"3 September 2026",description:"Black backpack with books and a water bottle inside.",icon:"fa-bag-shopping",image:"images/backpack.jpg",reportedBy:"Priya Patel",email:"priya@example.com",phone:"+91 98765 22222",type:"lost"},
    "student-id":{name:"Student ID Card",category:"Documents",location:"Main Campus",date:"2 September 2026",description:"College identification card with student details.",icon:"fa-id-card",image:"images/student-id.jpg",reportedBy:"Amit Patel",email:"amit@example.com",phone:"+91 98765 33333",type:"lost"},
    "wireless-headphones":{name:"Wireless Headphones",category:"Other",location:"Library",date:"1 September 2026",description:"Wireless headphones kept inside a small charging case.",icon:"fa-headphones",image:"images/headphones.jpg",reportedBy:"Neha Joshi",email:"neha@example.com",phone:"+91 98765 44444",type:"lost"},
    "silver-watch":{name:"Silver Wrist Watch",category:"Accessories",location:"Cafeteria",date:"30 August 2026",description:"Silver wrist watch with a dark leather strap.",icon:"fa-clock",image:"images/watch.jpg",reportedBy:"Karan Mehta",email:"karan@example.com",phone:"+91 98765 55555",type:"lost"},
    "wireless-earbuds":{name:"Wireless Earbuds",category:"Electronics",location:"Canteen",date:"28 August 2026",description:"White wireless earbuds inside a small charging case.",icon:"fa-ear-listen",image:"images/earbuds.jpg",reportedBy:"Riya Shah",email:"riya@example.com",phone:"+91 98765 66666",type:"lost"},
    "blue-water-bottle":{name:"Blue Water Bottle",category:"Other",location:"Classroom",date:"25 August 2026",description:"Blue reusable water bottle with a black cap.",icon:"fa-bottle-water",image:"images/water-bottle.jpg",reportedBy:"Dev Patel",email:"dev@example.com",phone:"+91 98765 77777",type:"lost"},

    /*---found items---*/
    "brown-wallet":{name:"Brown Leather Wallet",category:"Wallet",location:"Library",date:"5 September 2026",description:"Brown leather wallet found near the library.",icon:"fa-wallet",image:"images/wallet.jpg",reportedBy:"John Doe",email:"johndoe@gmail.com",phone:"+91 98765 43210",type:"found"},
    "found-earbuds":{name:"Wireless Earbuds",category:"Electronics",location:"Classroom",date:"4 September 2026",description:"White wireless earbuds found inside a classroom.",icon:"fa-ear-listen",image:"images/earbuds.jpg",reportedBy:"Riya Shah",email:"riya@example.com",phone:"+91 98765 66666",type:"found"},
    "found-car-keys":{name:"Set of Car Keys",category:"Keys",location:"Parking Area",date:"3 September 2026",description:"Two keys attached to a small black keychain.",icon:"fa-key",image:"images/car-keys.jpg",reportedBy:"Rahul Shah",email:"rahul@example.com",phone:"+91 98765 12345",type:"found"},
    "found-student-id":{name:"Student ID Card",category:"Documents",location:"Cafeteria",date:"1 September 2026",description:"College identification card found near the cafeteria.",icon:"fa-id-card",image:"images/student-id.jpg",reportedBy:"Amit Patel",email:"amit@example.com",phone:"+91 98765 33333",type:"found"}
};

/*---get item---*/
const id=new URLSearchParams(location.search).get("id");
const item=items[id];
const $=id=>document.getElementById(id);

/*---load item---*/
function loadItem(){
    if(!item){
        $("itemName").textContent="Item Not Found";
        $("itemDescription").textContent="The item you are looking for does not exist.";
        $("itemCategory").textContent="Unknown";
        $("itemLocation").textContent="Unknown";
        $("itemDate").textContent="Unknown";
        $("reportedBy").textContent="Unknown";
        $("contactInfo").textContent="Unavailable";
        $("placeholderIcon").className="fa-solid fa-magnifying-glass";
        $("itemImage").style.display="none";
        return;
    }

    const found=item.type==="found";
    const page=found?"found-items.html":"lost-items.html";

    document.title=`${item.name} | Lost & Found`;

    $("itemName").textContent=item.name;
    $("itemCategory").textContent=item.category;
    $("itemDescription").textContent=item.description;
    $("itemLocation").textContent=item.location;
    $("itemDate").textContent=item.date;
    $("reportedBy").textContent=item.reportedBy;
    $("contactInfo").textContent=item.email;

    $("infoCategory").textContent=item.category;
    $("infoStatus").textContent=found?"Found":"Lost";
    $("itemStatus").lastChild.textContent = found ? "Found" : "Lost";
    $("locationLabel").textContent = found ? "Found Location" : "Lost Location";
    $("dateLabel").textContent = found ? "Date Found" : "Date Lost";
    $("infoLocation").textContent=item.location;
    $("infoDate").textContent=item.date;

    $("modalEmail").textContent=item.email;
    $("modalPhone").textContent=item.phone;
    $("emailLink").href=`mailto:${item.email}`;
    $("phoneLink").href=`tel:${item.phone}`;

    $("placeholderIcon").className=`fa-solid ${item.icon}`;
    $("backText").textContent=found?"Back to found items":"Back to lost items";
    document.querySelector(".back-link").href=page;

    /*---navbar---*/
    document.querySelectorAll(".main-nav a").forEach(link=>{
        link.classList.toggle("active",link.getAttribute("href")===page);
    });

    /*---image---*/
    if(item.image){
        $("itemImage").src=item.image;
        $("itemImage").alt=item.name;
        $("itemImage").onload=()=>document.querySelector(".details-image").classList.add("has-image");
        $("itemImage").onerror=()=>document.querySelector(".details-image").classList.remove("has-image");
    }
}

/*---contact modal---*/
const modal=$("contactModal");

$("contactOwnerBtn").onclick=()=>modal.classList.add("show");
$("modalClose").onclick=()=>modal.classList.remove("show");

modal.onclick=e=>{
    if(e.target===modal) modal.classList.remove("show");
};

document.onkeydown=e=>{
    if(e.key==="Escape") modal.classList.remove("show");
};

/*---send email---*/
$("sendEmailBtn").onclick=()=>{
    if(item) location.href=`mailto:${item.email}?subject=Regarding your ${item.type} item - ${item.name}`;
};

/*---share item---*/
$("shareBtn").onclick=async()=>{
    try{
        if(navigator.share){
            await navigator.share({
                title:item?.name||"Lost & Found",
                text:item?`Found this lost item: ${item.name}`:"Lost & Found item",
                url:location.href
            });
        }else{
            await navigator.clipboard.writeText(location.href);
            showToast();
        }
    }catch(e){
        if(e.name!=="AbortError") showToast();
    }
};

/*---toast---*/
function showToast(){
    $("toast").classList.add("show");
    setTimeout(()=>$("toast").classList.remove("show"),2500);
}

/*---start---*/
loadItem();