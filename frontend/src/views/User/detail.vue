<template>
  <div class="container" style="margin-top: 100px;">
    <div class="row">
      <div class="col-lg-6">
        <div class="card m-0">
          <div class="card-img">
            <img
              src="@/assets/image/pantai.png"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card-body">
            <div class="row">
              <h4 h4 class="col-8">Pantai</h4>
              <div class="col-4">
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
              </div>
            </div>
            <div class="row">
              <p class="col-8">Jl. Raya Gianyar, No xxx</p>
              <span class="fa fa-eye col-4"> 100.000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 text-white">
        <h4>Description</h4>
        <hr />
        <p>
          Home to over a thousand amazing animals - Bali Safari Park is your
          destination for an adventurous, fun, educational experience more than
          just a safari. Our park is representing more than 120 species,
          including rare & endangered species - the Komodo Dragon, Orangutan,
          and the Bali Starling bird. Bali Safari Park is at the frontline of
          wildlife conservation in Indonesia. We are actively involved in
          ensuring the future survival and wellbeing of many Indonesian animal
          species.
        </p>
        <hr />
        <h4>Comments</h4>
        <hr />
        <div class="row anyClass">

          <div class="row">
            <div class="col-lg-6">
              <p>
                  <b>Agusyudi | 29-01-2001</b><br />
                  Good Place. <br />
                  <span class="fa fa-thumbs-up">100</span>
                  <span class="fa fa-thumbs-down"> 100</span>
                  <span class="fa fa-comments">100</span>
              </p>
            </div>
            <div class="col-lg-6">
              <button class="btn text-white"><span class="fa fa-pencil"></span></button> 
              <button class="btn text-white"><span class="fa fa-trash"></span></button> 
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6">
              <p>
                  <b>Agusyudi | 29-01-2001</b><br />
                  Good Place. <br />
                  <span class="fa fa-thumbs-up">100</span>
                  <span class="fa fa-thumbs-down"> 100</span>
                  <span class="fa fa-comments">100</span>
              </p>
            </div>
            <div class="col-lg-6">
              <button class="btn text-white"><span class="fa fa-pencil"></span></button> 
              <button class="btn text-white"><span class="fa fa-trash"></span></button> 
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6">
              <p>
                  <b>Agusyudi | 29-01-2001</b><br />
                  Good Place. <br />
                  <span class="fa fa-thumbs-up">100</span>
                  <span class="fa fa-thumbs-down"> 100</span>
                  <span class="fa fa-comments">100</span>
              </p>
            </div>
            <div class="col-lg-6">
              <button class="btn text-white"><span class="fa fa-pencil"></span></button> 
              <button class="btn text-white"><span class="fa fa-trash"></span></button> 
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-6">
              <p>
                  <b>Agusyudi | 29-01-2001</b><br />
                  Good Place. <br />
                  <span class="fa fa-thumbs-up">100</span>
                  <span class="fa fa-thumbs-down"> 100</span>
                  <span class="fa fa-comments">100</span>
              </p>
            </div>
            <div class="col-lg-6">
              <button class="btn text-white"><span class="fa fa-pencil"></span></button> 
              <button class="btn text-white"><span class="fa fa-trash"></span></button> 
            </div>
          </div>
          
        </div>
        <div class="row">
          <form action="">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Replay</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.anyClass {
  height: 200px;
  overflow-y: scroll;
}
</style>
