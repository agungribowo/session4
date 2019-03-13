var carouselData = [
    {
        id: 1,
        url: "https://cdn.pixabay.com/photo/2015/09/02/12/28/pencil-918449_960_720.jpg"
    },
    {
        id: 2,
        url:"https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_960_720.jpg"
    },
    {
        id: 3,
        url:"https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg"
    }
];

for (i = 0; i < carouselData.length; i++) {
    if (carouselData[i].id === 1) {
        $("#carousel-inner").append(`
        <div class="carousel-item active">
          <img src="${
            carouselData[i].url
            }" class="d-block w-100 carousel-img" />
        </div>
      `);
    } else {
        $("#carousel-inner").append(`
        <div class="carousel-item">
          <img src="${
            carouselData[i].url
            }" class="d-block w-100 carousel-img" />
        </div>
      `);
    }
}