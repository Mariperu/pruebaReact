import React from "react";

export default function ProductsListD({arrayProducts}) {
  return (
    <section className="container">
      <div className="vstack">
        {arrayProducts.map((eachProduct) => {
          return (
            <>
              <div className="row">
                <div class="col-sm">{eachProduct.description}</div>
                <div class="col-sm">
                  <button type="button" className="btn btn-primary">
                    See File
                  </button>
                </div>
                <div class="col-sm">
                  <button type="button" className="btn btn-primary">
                    Delete Product
                  </button>
                </div>
              </div>
              <hr/>
            </>
          );
        })}
      </div>
    </section>
  );
}
