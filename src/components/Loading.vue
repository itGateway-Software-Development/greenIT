<template>
    <div class="loading">
        <button class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center" type="button" disabled="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 101" class="inline w-4 h-4 mr-3 text-white animate-bounce" role="status" aria-hidden="true">
              <circle fill="#34D399" r="45" cy="50" cx="50"></circle>
            </svg>
            Sending...
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.loading {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
button {
    color: white;
    background-color: #10B981;
    --ring-color: #6EE7B7;
    font-weight: 500;
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    text-align: center;
    margin-right: 0.5rem;
    display: inline-flex;
    align-items: center;
    border: none;
  }
  
  button:hover {
    background-color: #059669;
  }
  
  button:focus {
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  
  button svg {
    display: inline;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.75rem;
    color: white;
    animation: bounce 1s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-5px);
    }
  
    50% {
      transform: translateY(5px);
    }
  }
</style>
