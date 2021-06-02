import { Button, Table } from '@/components';
import { Counter } from './features/counter/Counter';

export default function () {
  return (
    <div className="bg-gray-400 fixed top-0 right-0 z-50">
      <Counter />
    </div>
  );
}
