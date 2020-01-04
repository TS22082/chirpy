$(document).ready(function() {
  renderChirps();
  getChirp(1);
  // deleteChirp(2);
});

$("#submit-chirp").on("click", e => {
  e.preventDefault();
  console.log("clicked");
  const em = $("#email-new").val();
  const chirp = $("#chirp-new").val();
  const date = moment().format("YYYY-MM-DD HH:mm:ss");

  postChirp(em, chirp, date);
});

// show all chirps and render them to page
renderChirps = () => {
  $.get("/api/all", data => {
    console.log(data);
    $("#todo-cards").empty();

    data.map(chirp => {
      $("#todo-cards").append(
        `<div class="card mt-3 card-custom">
            <div class="card-body">
              <p>${chirp.author}</p class="author">
              <p>${chirp.body}</p class="body-text">
              <p>${moment(chirp.created_at).format("h:mma on dddd")}</p>
          </div>
        </div>`
      );
    });
  });
};

//return single chirp to console
getChirp = id => {
  $.ajax({
    method: "GET",
    url: `/api/${id}`
  }).then(res => {
    console.log(`data related to id: ${id}: `);
    console.log(res);
  });
};

// pot a single chirp to db
postChirp = (author, body, date) => {
  const newChirp = {
    author: author,
    body: body,
    created_at: date
  };

  $.ajax({
    method: "POST",
    url: "/api/new",
    data: newChirp
  });
};

// delete chirp by id
deleteChirp = id => {
  $.ajax({
    method: "DELETE",
    url: `/api/${id}`
  }).then(() => {
    renderChirps();
  });
};
