const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            // Track visibility state of the paragraph
            paragraphIsVisible: true,
            // Store the user input for background color (e.g., 'red', '#ff0000', 'rgb(255,0,0)')
            inputBackgroundColor: ''
        };
    },
    computed: {
        // Computed property that returns an object of CSS classes
        // Automatically recalculates when inputClass or paragraphIsVisible changes
        // Used with :class binding to dynamically apply multiple classes
        paragraphClasses() {
            return {
                user1: this.inputClass === 'user1',  // Apply 'user1' class when input is 'user1'
                user2: this.inputClass === 'user2',  // Apply 'user2' class when input is 'user2'
                visible: this.paragraphIsVisible,    // Apply 'visible' class when paragraphIsVisible is true
                hidden: !this.paragraphIsVisible     // Apply 'hidden' class when paragraphIsVisible is false
            }
        }
    },
    methods: {
        // Toggle the visibility state between true and false
        // Called when the button is clicked via @click directive
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
});

app.mount('#assignment');