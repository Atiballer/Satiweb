<template>
    <!-- Navbar  total-->
    <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top">
        <nuxt-link class="navbar-brand"
                   to="/">
            <!-- <img src="../assets/logo.png"
                 width="30"
                 height="30"
                 class="d-inline-block align-top"
                 alt="">-->ATIBALLER
        </nuxt-link>

        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
             id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item px-3">
                    <a class="nav-link"
                       href="#about">
                        <i class="fa fa-drivers-license"></i>
                        Rólam</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link"
                       href="#service">
                        <i class="fa fa-pencil-square-o"></i>
                        Szolgáltatások</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link"
                       href="#portfolio">
                        <i class="fa fa-th"></i>
                        Munkáim</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link"
                       href="#opinion">
                        <i class="fa fa-comments"></i>
                        Vélemények</a>
                </li>
                <li class="nav-item px-3">
                    <a class="nav-link"
                       href="#contact">
                        <i class="fa fa-envelope"></i>
                        Kapcsolat</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
