const Blog =  () => 
    (
    <div className="blog">
      <div className="jumbotron-container">
            <div className="jumbotron-overlay">
                <h1>La Vita Nostra</h1>
                <span class="subheading">Un blog del estilo de vida culinario italiano</span>
            </div>
      </div>
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">El origen de la pizza</h2>
                        <h3 className="post-subtitle">La pizza es probablemente el plato más común en la carta de cualquier restaurante italiano. Se trata de un pan plano horneado...</h3>
                    </a>
                    <p className="post-meta">
                        Posteado por
                        <a href="#!"> Appetitoso Admin</a> el día 24 de Septiembre, 2021
                    </p>
                </div>
              
                <hr className="my-4" />
               
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">Recetas típicas de Italia</h2>
                        <h3 className="post-subtitle">La gastronomía italiana se caracteriza por ser una cocina muy variada. Está incluida dentro de la denominada gastronomía mediterránea...</h3>
                    </a>
                    <p className="post-meta">
                        Posteado por
                        <a href="#!"> Appetitoso Admin</a> el día 18 Septiembre, 2021
                    </p>
                </div>
               
                <hr className="my-4" />
                
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">Gastronomía italiana, la evolución de un pueblo</h2>
                        <h3 className="post-subtitle">Una de las cocinas más populares del planeta, con platos conocidos en todo el mundo, es sin duda la italiana...</h3>
                    </a>
                    <p className="post-meta">
                        Posteado por
                        <a href="#!"> Appetitoso Admin</a> el día 24 Agosto, 2021
                    </p>
                </div>
               
                <hr className="my-4" />
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">Los orígenes de la pasta: un alimento milenario</h2>
                        <h3 className="post-subtitle">Aunque la leyenda popular afirma que fue Marco Polo quien introdujo la pasta en Italia...</h3>
                    </a>
                    <p className="post-meta">
                        Posteado por
                        <a href="#!"> Appetitoso Admin</a> el día 8 Julio, 2021
                    </p>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-end mb-4"><button className="btn btn-primary text-uppercase"> Página anterior →</button></div>
            </div>
        </div>
    </div>
    
   
      </div>
    );
  
export default Blog