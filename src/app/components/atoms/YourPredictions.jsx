import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { BodyYourPredictionsCard } from './BodyPredictionsCard';
import StatusPredictionsCard from './StatusPredictionsCard';

export default function YourPredictions({ predictionData, matchStatus }) {
  const points = predictionData?.points ?? 0;
  const status = predictionData?.status ?? 'PENDING';
  const result = predictionData?.expectedResult ?? 'Barcelona';

  return (
    <section className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-regularNav-16 font-medium text-label">
          Tus predicciones
        </h3>
        <Link
          to="/match/mypredictions"
          className="flex items-center gap-2 text-regular-14 text-purpleWaki"
        >
          Ver todas
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
      <div className="flex flex-col divide-y overflow-hidden rounded-large bg-white text-regular-12 text-grayWaki shadow-custom">
        <BodyYourPredictionsCard
          result={result}
          points={points}
          status={status.toLowerCase()}
          matchStatus={matchStatus}
        />
        {points > 0 && (
          <StatusPredictionsCard points={points} status={status} />
        )}
      </div>
    </section>
  );
}
