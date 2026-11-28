<script setup>
import { Roll } from '@dice-roller/rpg-dice-roller'

const props = defineProps({ notation: { type: String, required: true } })
const input = ref(props.notation)
const output = ref('')
const error = ref('')
const data = { bonus: 3, character: { attackBonus: 2, isPoisoned: true } }
function roll() {
  error.value = ''
  output.value = ''
  try {
    output.value = new Roll(input.value, { data }).present()
  } catch (err) {
    error.value = err.message
  }
}
</script>

<template>
  <div class="not-prose my-5 rounded-lg border border-default bg-muted p-4">
    <form class="flex flex-wrap items-end gap-2" @submit.prevent="roll">
      <UFormField label="Dice notation" class="min-w-0 flex-1">
        <UInput v-model="input" class="w-full font-mono" />
      </UFormField>
      <UButton type="submit" icon="i-lucide-dices">Roll</UButton>
    </form>
    <p v-if="output" class="mt-3 break-words font-mono" aria-live="polite">{{ output }}</p>
    <p v-if="error" class="mt-3 text-error" role="alert">{{ error }}</p>
  </div>
</template>
