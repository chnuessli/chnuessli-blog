import React, { Component} from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Christian Nüssli</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-pill mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Home</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projekte</a></li>
                    <!--<li class="nav-item"><a class="nav-link js-scroll-trigger" href="blog.chnuessli.ch">Blog</a></li>-->
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>
        )
    }
}