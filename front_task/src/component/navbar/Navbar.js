<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand">TaskManager</Link>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success m-2" type="submit">Sign-In</button>
                        <button class="btn btn-outline-success m-2" type="submit">Sign-Up</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
=======
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand">TaskManager</Link>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success m-2" type="submit">Sign-In</button>
                        <button class="btn btn-outline-success m-2" type="submit">Sign-Up</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
>>>>>>> 190381c7cd42b2d5ebfaa28236bb740ef07fe881
