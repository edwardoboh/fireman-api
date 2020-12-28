import React from 'react'

import {
    Card,
    CardTitle,
    CardImg,
    CardText,
    Row,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
} from 'reactstrap'

const MoreDetails = () => {

    const moreDetailsJson = localStorage.getItem("moreDetails")
    const moreDetails = JSON.parse(moreDetailsJson)

    return(
        <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" ><strong>Fireman</strong></NavbarBrand>
            {/* <NavbarToggler onClick={toggle}/> */}
            {/* <Collapse isOpen={isOpen} navbar> */}

              <Nav className="ml-auto" navbar>
                <NavItem>
                  
                </NavItem>
                
                <NavItem>
                  
                </NavItem>
              </Nav>

            {/* </Collapse> */}
          </Navbar>
        <Container>
        <div>
                {/* <Col sm="6"> */}
                    <Card body className="w-40 mb-5 mt-5" sm="6">
                    <CardTitle tag="h5">Device Details</CardTitle>
                    <CardText>Device Name: {moreDetails.deviceName}</CardText>
                    <CardText>Device ID: {moreDetails._id}</CardText>
                    <CardText>Device State: {moreDetails.deviceState}</CardText>
                    <CardText>Latitude: {moreDetails.latitude}</CardText>
                    <CardText>Longitude: {moreDetails.longitude}</CardText>
                    <CardText>Address: {moreDetails.address}</CardText>
                    <CardText>Owner Name: {moreDetails.ownerName}</CardText>
                    {/* <Button>Go somewhere</Button> */}
                    </Card>
                {/* </Col> */}
        </div>
        <div>
                {/* <Col sm="6"> */}
                    <Card body className="w-80">
                    <CardTitle tag="h5">Map Goes Here</CardTitle>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    </Card>
                {/* </Col> */}
        </div>
        </Container>
        </div>
    )
}

export default MoreDetails