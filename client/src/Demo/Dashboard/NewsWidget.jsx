import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";

const newsApiKey = process.env.REACT_APP_NEWS_KEY;
const newsUrl =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=3";

export const NewsWidget = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsWidgetStatusColor, setNewsWidgetStatusColor] = useState("gray");

  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(`${newsUrl}&apiKey=${newsApiKey}`);
      const news = await response.json();
      setNewsArticles(news.articles);
      setNewsWidgetStatusColor('green')
    }
    // fetchNewsData();
  }, []);

  return (
    <Col md={6} xl={4}>
      <Card>
        <Card.Header className="bg-danger d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="mb-0 p-0 text-white">
            News
          </Card.Title>
          <i className={`fa fa-circle text-c-${newsWidgetStatusColor} f-20`} />
        </Card.Header>
        <Card.Body className="p-0">
          {newsArticles.length > 0 ? (
            newsArticles.slice(0, 3).map((article, index) => {
              return (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="py-1 d-flex justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
                    <div className="d-flex align-items-center">
                      <img
                        src={article.urlToImage}
                        className="rounded mx-2"
                        alt="not available"
                        style={{ width: "90px", height: "80px" }}
                      />
                    </div>
                    <div>
                      <h5>{article.title}</h5>
                      <p className="mb-0 text-dark">
                        {article.description.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </a>
              );
            })
          ) : (
            <h4 className="text-center my-4 text-danger">news not available</h4>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
