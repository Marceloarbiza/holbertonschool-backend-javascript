export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const mat = mathFunction();
    queue.push(mat);
    queue.push('Guardrail was processed');
  } catch (err) {
    queue.push(err);
    queue.push('Guardrail was processed');
  }
  return queue;
}
