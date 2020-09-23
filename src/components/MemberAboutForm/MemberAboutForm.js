import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useFormik } from 'formik';
import ReactDatetime from 'react-datetime';
import moment from 'moment';

// import reactstrap Styles/Components
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col,
  CardHeader,
} from 'reactstrap';
import ImageUpload from '../ImageUpload/ImageUpload';

// Basic functional component structure for React with default state
// value setup.
function MemberAboutForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const formik = useFormik({
    initialValues: {
      displayName: '', // string
      role: '', // string
      organization: '', // string
      title: '', // string
      streetAddress: '', // string
      city: '', // string
      state: '', // string
      zipcode: '', // number
      linkedin: '', // string
      facebook: '', // string
      instagram: '', // string
      twitter: '', // string
      headshot: props.store.imageUrlReducer.avatarPath, // string
      bio: '', // string
      shirtSize: '', // string
      mentor: false,
      mentee: false,
      birthday: '',
    },
    onSubmit: (values) => {
      // setHeading(JSON.stringify(values, null, 2));
      // alert(JSON.stringify(values, null, 2));
      console.log('image reducer', props.store.imageUrlReducer);
      console.log('values', values);
      props.dispatch({
        type: 'HOLD_ABOUT',
        payload: values,
      });
    },
  });

  useEffect(() => {
    formik.values.headshot = props.store.imageUrlReducer.avatarPath;
  });

  return (
    <>
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle>
            <CardText className="display-3">About Me:</CardText>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Row>
                  <ImageUpload />

                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="displayName">Display Name: </Label>
                      <Input
                        className="form-control-alternative"
                        id="displayName"
                        name="displayName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.displayName}
                      />
                      <Label htmlFor="bio">Bio: </Label>
                      <Input
                        className="form-control-alternative"
                        id="bio"
                        name="bio"
                        type="textarea"
                        maxLength={300}
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6}>
                    <FormGroup>
                      <Label htmlFor="birthday">Birthday: </Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <ReactDatetime
                          id="birthday"
                          name="birthday"
                          onChange={(e) => {
                            formik.setFieldValue(
                              'birthday',
                              moment(e).format('MM-DD-YYYY')
                            );
                          }}
                          value={formik.values.birthday}
                          inputProps={{
                            placeholder: 'Birthday',
                          }}
                          timeFormat={false}
                          closeOnSelect={true}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <hr />
                <FormGroup>
                  <CardText className="display-4">Admin:</CardText>
                  <Row>
                    <Col lg={6}>
                      <Label htmlFor="email">Community Role: </Label>
                      <Input
                        className="form-control-alternative"
                        id="role"
                        name="role"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                      />
                      <Label htmlFor="organization">Organization: </Label>
                      <Input
                        className="form-control-alternative"
                        id="organization"
                        name="organization"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.organization}
                      />
                      <Label htmlFor="title">Job Title: </Label>
                      <Input
                        className="form-control-alternative"
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                    </Col>
                    <Col lg={6}>
                      <Label htmlFor="streetAddress">Street Address</Label>
                      <Input
                        className="form-control-alternative"
                        id="streetAddress"
                        name="streetAddress"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.streetAddress}
                      />
                      <Row>
                        <Col>
                          <Label htmlFor="city">City: </Label>
                          <Input
                            className="form-control-alternative"
                            id="city"
                            name="city"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                          />
                        </Col>
                        <Col>
                          <Label htmlFor="state">State: </Label>
                          <Input
                            className="form-control-alternative"
                            id="state"
                            name="state"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                          />
                        </Col>
                      </Row>
                      <Label htmlFor="zipcode">Zipcode: </Label>
                      <Input
                        className="form-control-alternative"
                        id="zipcode"
                        name="zipcode"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <FormGroup>
                    <CardText className="display-4">
                      Mentorship Options:
                    </CardText>
                    <legend className="col-form-label col-sm-12">
                      I am interested in mentoring another IHKC member.
                    </legend>
                    <InputGroup className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="yes-mentor"
                        name="mentor"
                        type="radio"
                        onChange={formik.handleChange}
                        value={true}
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="yes-mentor"
                      >
                        Yes, I'm interesting in becoming a community mentor.
                      </Label>
                    </InputGroup>
                    <InputGroup className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="no-mentor"
                        name="mentor"
                        type="radio"
                        value={false}
                        onChange={formik.handleChange}
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="no-mentor"
                      >
                        No, I'm not interested at this time.
                      </Label>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <legend className="col-form-label col-sm-12">
                      I am interested in being mentored by another IHKC member.
                    </legend>

                    <InputGroup className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="yes-mentor-2"
                        name="mentee"
                        type="radio"
                        value={true}
                        onChange={formik.handleChange}
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="yes-mentor-2"
                      >
                        Yes, I am interesting in being mentored by another IHKC
                        member.
                      </Label>
                    </InputGroup>
                    <InputGroup className="custom-control custom-radio mb-3">
                      <Input
                        className="custom-control-input"
                        id="no-mentor-2"
                        name="mentee"
                        type="radio"
                        value={false}
                        onChange={formik.handleChange}
                      />
                      <Label
                        className="custom-control-label"
                        htmlFor="no-mentor-2"
                      >
                        No, I'm not interested at this time.
                      </Label>
                    </InputGroup>
                  </FormGroup>
                </FormGroup>
                <hr />
                <CardText className="display-4">Socials:</CardText>
                <Row>
                  <Col lg={6}>
                    <i className="fa fa-linkedin-square" />{' '}
                    <Label htmlFor="linkedin">LinkedIn: </Label>
                    <Input
                      className="form-control-alternative"
                      id="linkedin"
                      name="linkedin"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.linkedin}
                    />
                  </Col>
                  <Col lg={6}>
                    <i className="fa fa-facebook-square" />{' '}
                    <Label htmlFor="facebook">Facebook: </Label>
                    <Input
                      className="form-control-alternative"
                      id="facebook"
                      name="facebook"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.facebook}
                    />
                  </Col>
                  <Col lg={6}>
                    <i className="fa fa-twitter-square" />{' '}
                    <Label htmlFor="twitter">Twitter: </Label>
                    <Input
                      className="form-control-alternative"
                      id="twitter"
                      name="twitter"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.twitter}
                    />
                  </Col>
                  <Col lg={6}>
                    <i
                      className="fa fa-instagram"
                      style={{
                        backgroundColor: '#525f7f',
                        color: 'white',
                        borderRadius: '3px',
                        fontSize: '11px',
                        padding: '1.5px 2.5px',
                        verticalAlign: 'middle',
                      }}
                    />{' '}
                    <Label htmlFor="instagram">Instagram: </Label>
                    <Input
                      className="form-control-alternative"
                      id="instagram"
                      name="instagram"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.instagram}
                    />
                  </Col>
                </Row>
                <Label htmlFor="shirtsize">T-Shirt Size: </Label>
                <Input
                  id="shirtSize"
                  type="select"
                  className="form-control-alternative"
                  onChange={formik.handleChange}
                  value={formik.values.shirtSize}
                >
                  <option value="">Select a T-Shirt Size</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </Input>
                <hr />
                <Row>
                  <Col lg={{ size: 2, offset: 10 }}>
                    <Button
                      outline
                      color="primary"
                      type="submit"
                      onClick={props.toggle}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default connect(mapStoreToProps)(MemberAboutForm);
