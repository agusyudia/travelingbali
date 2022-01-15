<template>
    <div class="container" style="margin-top: 130px;">
        <div class="row text-white">
            <p class=" text-center">Fill out the form below to send us a message and Let's us know more <br>destination
                for other people :)</p>
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <form action="">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Budi">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"
                            placeholder="Phone Number">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button class="btn btn-success p-3 ps-4 pe-4"><span class="fa fa-send"></span> Send</button>
                </form>
            </div>
        </div>
    </div>
</template>