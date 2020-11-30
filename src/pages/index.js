import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        entrees: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        plats: allDatoCmsProductCopy1 {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        desserts: allDatoCmsProductCopy2 {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
       <h4  className="category">Entrées</h4>
               <div className="Catalogue">
          {data.entrees.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://tu2you.netlify.app/`}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="category">Plats</p>
        <div className="Catalogue">
          {data.plats.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://tu2you.netlify.app/`}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="category">Desserts</p>
        <div className="Catalogue">
          {data.desserts.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://tu2you.netlify.app/`}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);
