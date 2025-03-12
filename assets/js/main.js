/*******************Start women Section******************* */
const getCategorie = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    return data;
  } catch (error) {
    return [];
  }
};
const displaywomen = async () => {
  try {
    const Categorie = await getCategorie();
    const result1 = Categorie.map((ele) => {
      return `
            <div  class = "categorie">
              
            <img src="${ele.image}" />
              <p>${ele.title}</p>
              <div class ="row stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              </div>
            <span >${ele.price}$</span>
            <a href="#" id ="shopping-car"><i  class="fa-solid fa-cart-plus"></i></a>
            </div>
              `;
    }).join(" ");
    document.querySelector(".womenSection .container .contant").innerHTML =
      result1;
  } catch (error) {
    document.querySelector(
      ".womenSection .container .contant"
    ).innerHTML = `<p>Please try again later ... </p>  `;
  } finally {
    document.querySelector(".loading").classList.add("di-none");
  }
};
displaywomen();
/*******************End women Section*************** ***********/

/***************Start jewelery Section******************** */
const getCategorie2 = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    return data;
  } catch (error) {
    return [];
  }
};
const displayjewelery = async () => {
  try {
    const Categorie2 = await getCategorie2();
    const result2 = Categorie2.map((ele) => {
      return `
            <div  class = "categorie">
            <img src="${ele.image}" />
              <p>${ele.title}</p>
              <div class ="row stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              </div>
            <span >${ele.price}$</span>
              <a href="#" id ="shopping-car"><i class="fa-solid fa-cart-plus"></i></a>
            </div>
              `;
    }).join(" ");
    document.querySelector(".jewelerySection .container .contant").innerHTML =
      result2;
  } catch (error) {
    document.querySelector(
      ".jewelerySection .container .contant"
    ).innerHTML = `<p>Please try again later ... </p>  `;
  }
};
displayjewelery();
/***************End jewelery Section******************** */

/*******************Start electronics Section ************************ */
const getCategorie3 = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    return data;
  } catch (error) {
    return [];
  }
};
const displayelectronics = async () => {
  try {
    const Categorie3 = await getCategorie3();
    const result3 = Categorie3.map((ele) => {
      return `
            <div  class = "categorie">
            <img src="${ele.image}" />
              <p>${ele.title}</p>
              <div class ="row stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              </div>
            <span >${ele.price}$</span>
              <a href="#" id ="shopping-car"><i class="fa-solid fa-cart-plus"></i></a>

            </div>
              `;
    }).join(" ");
    document.querySelector(
      ".electronicsSection .container .contant"
    ).innerHTML = result3;
  } catch (error) {
    document.querySelector(
      ".electronicsSection .container .contant"
    ).innerHTML = `<p>Please try again later ... </p>  `;
  }
};
displayelectronics();
/*********************End electronics Section ********************* */

/************************Start men's clothing Section*********************** */
const getCategorie4 = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    return data;
  } catch (error) {
    return [];
  }
};
const displaymen = async () => {
  try {
    const Categorie4 = await getCategorie4();
    const result4 = Categorie4.map((ele) => {
      return `
            <div  class = "categorie">
            <img src="${ele.image}" />
              <p>${ele.title}</p>
              <div class ="row stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              </div>
            <span >${ele.price}$</span>
              <a href="#" id ="shopping-car"><i class="fa-solid fa-cart-plus"></i></a>

            </div>
              `;
    }).join(" ");
    document.querySelector(".menSection .container .contant").innerHTML =
      result4;
  } catch (error) {
    document.querySelector(
      ".menSection .container .contant"
    ).innerHTML = `<p>Please try again later ... </p>  `;
  }
};
displaymen();
/************************End men's clothing Section*********************** */

/******************** Start All Product***************** */
const getProducts = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
  } catch (error) {
    return [];
  }
};

const displayCategorie = async (page = 1) => {
  try {
    const products = await getProducts();

    const numberOfPages = Math.ceil(products.length / 6);

    const startIndex = (page - 1) * 6;
    const paginatedProducts = products.slice(startIndex, startIndex + 6);

    const result = paginatedProducts
      .map((ele) => {
        return `
          <div class="product">
            <img src="${ele.image}" class="categorieImg"/>
            <p>${ele.title}</p>
            <div class="row stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </div>
            <span>${ele.price}$</span>
            <a href="#" id="shopping-car"><i class="fa-solid fa-cart-plus"></i></a>

          </div>
        `;
      })
      .join("");
    document.querySelector(".allProducts .row").innerHTML = result;
    customModal();

    let paginationLink = ``;
    if (page > 1) {
      paginationLink += `<li ><button onclick = displayCategorie(${
        page - 1
      }) >&lt</button></li>`;
    } else {
      paginationLink += `<li ><button disabled >&lt</button></li>`;
    }
    for (let i = 1; i <= numberOfPages; i++) {
      paginationLink += `<li> <button  class="pagination-btn " onclick="displayCategorie(${i})">${i}</button></li>`;
    }
    if (page < numberOfPages) {
      paginationLink += `<li ><button onclick = displayCategorie(${
        parseInt(page) + 1
      })>&gt</button></li>`;
    } else {
      paginationLink += `<li ><button disabled >&gt</button></li>`;
    }
    document.querySelector(".pagination").innerHTML = paginationLink;
    // active class
    document.querySelectorAll(".pagination-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    document.querySelectorAll(".pagination-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.add("active");
      });
    });
  } catch (error) {
    document.querySelector(
      ".allProducts .row"
    ).innerHTML = `<p>Please try again later ...</p>`;
  }
};

displayCategorie();

function customModal() {
  try {
    const myModal = document.querySelector(".my-modal");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const closeBtn = document.querySelector(".close-btn");
    const categorieImges = Array.from(
      document.querySelectorAll(".categorieImg")
    );
    let currentIndex = 0;
    categorieImges.forEach((img) => {
      img.addEventListener("click", (e) => {
        myModal.classList.remove("d-none");
        myModal.querySelector("img").setAttribute("src", e.target.src);

        const currentImg = e.target;
        console.log(e.target);

        currentIndex = categorieImges.indexOf(currentImg);
        console.log(currentIndex);
      });
    }); // End forEach

    closeBtn.addEventListener("click", (e) => {
      myModal.classList.add("d-none");
    }); //closeBtn

    rightBtn.addEventListener("click", (e) => {
      currentIndex++;
      if (currentIndex >= categorieImges.length) {
        currentIndex = 0;
      }
      const src = categorieImges[currentIndex].getAttribute("src");
      myModal.querySelector("img").setAttribute("src", src);
    }); //rightBtn

    leftBtn.addEventListener("click", (e) => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = categorieImges.length - 1;
      }
      const src = categorieImges[currentIndex].getAttribute("src");
      myModal.querySelector("img").setAttribute("src", src);
    }); //leftbtn

    document.addEventListener("keydown", (e) => {
      if (e.code == "ArrowRight") {
        currentIndex++;
        if (currentIndex >= categorieImges.length) {
          currentIndex = 0;
        }
        const src = categorieImges[currentIndex].getAttribute("src");
        myModal.querySelector("img").setAttribute("src", src);
      } else if (e.code == "ArrowLeft") {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = categorieImges.length - 1;
        }
        const src = categorieImges[currentIndex].getAttribute("src");
        myModal.querySelector("img").setAttribute("src", src);
      } else if (e.code == "Escape") {
        myModal.classList.add("d-none");
      }
    });
  } catch (error) {
    return `Please try again later ...`;
  }
}
//customModal Function
/*******************End All Product************************* */
