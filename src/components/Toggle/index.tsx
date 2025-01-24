
interface ToggleButtonProps {
  onToggle: () => void; 
}

export default function ToggleButton({onToggle}: ToggleButtonProps){
  return (
    <div className="toggle-box" onClick={onToggle}>      
        <div className="toggle">
            <input type="checkbox"/>
        </div>
    </div>
  );
};


