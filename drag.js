const minPadding = 16;
        const deadWidth = minPadding;
const body = document.querySelector("body");
document.addEventListener("alpine:init", () => {
  Alpine.data("drag", () => ({
    isDragging: false,
    startX: 0,
          styles: {paddingLeft: this.paddingLeft + 'px', paddingRight: this.paddingRight + 'px'}
    paddingLeft: minPadding,
    startPadding: 0,
    paddingRight: minPadding,
    direction: "", // left or right
    mouseDownLeft(evt) {
      this.isDragging = true;
      this.startPadding = this.paddingLeft;
      this.startX = evt.clientX;
      this.direction = "left";
    },
    mouseDownRight(evt) {
      this.isDragging = true;
      this.startPadding = this.paddingRight;
      this.direction = "right";
      this.startX = evt.clientX;
    },
    mouseUp(evt) {
      this.isDragging = false;
    },
    mouseMove(evt) {
      if (this.isDragging) {

        if (
          evt.clientX < deadWidth ||
          evt.clientY < deadWidth ||
          body.clientWidth - evt.clientX < deadWidth ||
          body.clientHeight - evt.clientY < deadWidth
        ) {
          this.isDragging = false;
        }
        const x = evt.clientX;
        const diff = x - this.startX;
        if (this.direction === "left") {
          this.paddingLeft = this.startPadding + diff;
          if (this.paddingLeft < minPadding) {
            this.paddingLeft = minPadding;
          }
        } else {
          this.paddingRight = this.startPadding - diff;
          if (this.paddingRight < minPadding) {
            this.paddingRight = minPadding;
          }
        }
        this.styles = {paddingLeft: this.paddingLeft + 'px', paddingRight: this.paddingRight + 'px'}
      }
    }
  }));
});
