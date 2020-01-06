class TextInput extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    //TODO: make the class names more generic

    set element(element) {
        this.root.innerHTML = /*html*/`
            <style>
                .form-field {
                    width: ${element.percent_width}%;
                    position: relative;
                    height: 50px;
                    overflow: hidden;
                }
                
                .form-field input {
                    width: 100%;
                    height: 100%;
                    padding-top: .5em;
                    color: #595f6e;
                    border: none;
                    outline: none;
                }
                
                .form-field label {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    border-bottom: 1px solid black;
                }
                
                .form-field label::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -1px;
                    height: 100%;
                    width: 100%;
                    border-bottom: 3px solid #5fa8d3;
                    transform: translateX(-100%);
                    transition: all 0.3s ease;
                }
                
                .content-name {
                    position: absolute;
                    bottom: 5px;
                    left: 0px;
                    transition: all 0.3s ease;
                }
                
                .form-field input:focus + .label-name::after,
                .form-field input:valid + .label-name::after {
                    transform: translateX(0%);
                }
                
                .form-field input:focus + .label-name .content-name, 
                .form-field input:valid + .label-name .content-name {
                    transform: translateY(-150%);
                    font-size: 14px;
                    color: #5fa8d3;
                }
            </style>


            <div class="form-field">
                <input type="${element.type}" name="${element.name}" required autocomplete="off" ${element.attributes} />
                <label for="${element.name}" class="label-name">
                    <span class="content-name">${element.label}</span>
                </label>
            </div>
        `;
    }

}

customElements.define('text-input', TextInput);
