import { useEffect, useRef, useState } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const [loading, setLoading] = useState(true);
  const [resp,setResp] = useState(null);
 
  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;


  useEffect(() => {
    const fetchData = async () => {
      try {
        await getMovieData(movieId);
        setLoading(false); 
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    };
    fetchData();
  }, [resp]); 


  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("http://localhost:8080/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });
      console.log(response);
      setResp(response);
      rev.value = "";

    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <Container>
      {!loading ? (
        <>
          <Row>
            <Col>
              <h3>Reviews</h3>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <img src={movie?.poster} alt="Movie Poster" width="100%" />
            </Col>
            <Col>
              <>
                <Row>
                  <Col>
                    <ReviewForm
                      handleSubmit={addReview}
                      revText={revText}
                      labelText="Write a Review?"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
              {movie.reviewIds?.map((r, index) => (
                <React.Fragment key={index}>
                  <Row>
                    <Col>{r.body}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </React.Fragment>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col>
            <h3>Loading...</h3>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Reviews;