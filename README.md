
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


2) Custom Directive:
--------------------

    1) create:
    ----------

        ng g d imp

    2) implement:
    -------------

        constructor(private _elementRef:ElementRef){
            _elementRed.nativeElement.style.color = 'red';
        }

    3) apply:
    ---------

        <h1 appImp> calculator </h1>

3) Custom datatype/ custom interface/ custom model:
----------------------------------------------------

    1) create:
    ----------

        ng g i phone

    2) implement:
    -------------

        export interface Phone{
            company: string;
            price: number;
        }

    3) apply:
    ---------

        public phone:Phone = <Phone>{};

        public phones:Phone[] = [];
        
