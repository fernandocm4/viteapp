<template>
    <div class="item">
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.item {
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  display: flex;
  position: relative;
}



.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>