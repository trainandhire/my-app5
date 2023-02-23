
1) Custom Pipe:
---------------

    1) Create:
    ----------

        ng g p price

    2) Implement:
    -------------

        return "Rs ." + value + "/-"

    3) Apply:
    ---------

        {{ product.price | price }}
